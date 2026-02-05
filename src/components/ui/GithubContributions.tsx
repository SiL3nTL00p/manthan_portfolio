import { useEffect, useState } from 'react';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface ContributionWeek {
    days: ContributionDay[];
}

const GithubContributions = () => {
    const [contributionData, setContributionData] = useState<ContributionWeek[]>([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const GITHUB_USERNAME = 'SiL3nTL00p'; // Your GitHub username

    useEffect(() => {
        fetchGithubContributions();
    }, []);

    const fetchGithubContributions = async () => {
        try {
            setLoading(true);
            setError(null);

            // GitHub GraphQL API query - restricted to current year (2026)
            const currentYear = new Date().getFullYear();
            const from = `${currentYear}-01-01T00:00:00Z`;
            const to = `${currentYear}-12-31T23:59:59Z`;

            const query = `
        query($userName: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $userName) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;

            // You need to add your GitHub Personal Access Token here
            // Get it from: https://github.com/settings/tokens
            const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';

            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${GITHUB_TOKEN}`,
                },
                body: JSON.stringify({
                    query,
                    variables: { userName: GITHUB_USERNAME, from, to },
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch GitHub data');
            }

            const data = await response.json();

            if (data.errors) {
                throw new Error(data.errors[0].message);
            }

            const calendar = data.data.user.contributionsCollection.contributionCalendar;
            setTotalContributions(calendar.totalContributions);

            // Transform the data into a format easier to render
            const weeks = calendar.weeks.map((week: any) => ({
                days: week.contributionDays.map((day: any) => ({
                    date: day.date,
                    count: day.contributionCount,
                    level: getContributionLevel(day.contributionCount),
                })),
            }));

            setContributionData(weeks);
        } catch (err) {
            console.error('Error fetching GitHub contributions:', err);
            setError(err instanceof Error ? err.message : 'Failed to load contributions');
            // Generate mock data for development
            generateMockData();
        } finally {
            setLoading(false);
        }
    };

    const getContributionLevel = (count: number): number => {
        if (count === 0) return 0;
        if (count < 3) return 1;
        if (count < 6) return 2;
        if (count < 9) return 3;
        return 4;
    };

    const generateMockData = () => {
        // Generate contributions for this year (2026)
        const weeks: ContributionWeek[] = [];
        const currentYear = new Date().getFullYear();
        const yearStart = new Date(currentYear, 0, 1);
        const today = new Date();
        const yearEnd = today.getFullYear() === currentYear ? today : new Date(currentYear, 11, 31);

        // Calculate weeks from year start to today
        const millisInAWeek = 7 * 24 * 60 * 60 * 1000;
        const weekCount = Math.ceil((yearEnd.getTime() - yearStart.getTime()) / millisInAWeek);

        for (let week = 0; week < weekCount; week++) {
            const days: ContributionDay[] = [];
            for (let day = 0; day < 7; day++) {
                const date = new Date(yearStart);
                date.setDate(date.getDate() + (week * 7 + day));

                // Don't add dates beyond today
                if (date > yearEnd) break;

                const count = Math.floor(Math.random() * 15);
                days.push({
                    date: date.toISOString().split('T')[0],
                    count,
                    level: getContributionLevel(count),
                });
            }
            if (days.length > 0) {
                weeks.push({ days });
            }
        }

        setContributionData(weeks);
        setTotalContributions(1808);
    };

    const getColorForLevel = (level: number): string => {
        const colors = [
            '#161b22', // level 0 - no contributions (dark gray)
            '#0e4429', // level 1 - low contributions (darker green)
            '#006d32', // level 2 - medium-low (medium green)
            '#26a641', // level 3 - medium-high (brighter green)
            '#39d353', // level 4 - high contributions (brightest green)
        ];
        return colors[level];
    };

    const getMonthLabels = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const labels: { month: string; offset: number }[] = [];
        let currentMonth = -1;

        contributionData.forEach((week, weekIndex) => {
            const firstDay = week.days[0];
            if (firstDay) {
                const month = new Date(firstDay.date).getMonth();
                if (month !== currentMonth && weekIndex > 0) {
                    currentMonth = month;
                    labels.push({
                        month: months[month],
                        offset: weekIndex,
                    });
                }
            }
        });

        return labels;
    };

    if (loading) {
        return (
            <div className="w-full py-12 px-5 bg-[#0b0909]">
                <div className="flex items-center justify-center">
                    <div className="text-gray-500 text-sm font-sfmono">Loading contributions...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-12 bg-[#111111] animate-in fade-in duration-1000\" style={{ animationDelay: '600ms' }}>
            <div className="w-full overflow-x-auto px-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                    <h2 className="text-[#7a7770] text-sm font-sfmono tracking-[0.2em] uppercase select-none font-normal">
                        Developer Activity
                    </h2>
                    <p className="text-gray-500 text-xs font-sfmono">
                        {totalContributions.toLocaleString()} contributions in the last year
                    </p>
                </div>

                {error && (
                    <div className="mb-4 px-1">
                        <p className="text-yellow-500 text-xs font-sfmono">
                            Note: Using demo data. Add VITE_GITHUB_TOKEN to .env.local for live data.
                        </p>
                    </div>
                )}

                {/* Contribution Grid */}
                <div className="relative">
                    {/* Month labels */}
                    <div className="flex mb-2 sm:mb-3 ml-8 sm:ml-14">
                        {getMonthLabels().map((label, index) => {
                            const isMobile = window.innerWidth < 768;
                            const offset = isMobile ? 10 : 14;
                            const padding = isMobile ? 40 : 56;
                            return (
                                <div
                                    key={index}
                                    className="text-[9px] sm:text-xs text-gray-500 font-sfmono absolute"
                                    style={{ left: `${label.offset * offset + padding}px` }}
                                >
                                    {label.month}
                                </div>
                            );
                        })}
                    </div>

                    {/* Grid with day labels */}
                    <div className="flex gap-0">
                        {/* Day labels */}
                        <div className="flex flex-col gap-0.5 sm:gap-1 mr-1 sm:mr-3 mt-6 sm:mt-8">
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px]"></div>
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px] leading-[10px] sm:leading-[12px]">Mon</div>
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px]"></div>
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px] leading-[10px] sm:leading-[12px]">Wed</div>
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px]"></div>
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px] leading-[10px] sm:leading-[12px]">Fri</div>
                            <div className="text-[9px] sm:text-[11px] text-gray-500 font-sfmono h-[10px] sm:h-[12px]"></div>
                        </div>

                        {/* Contribution squares */}
                        <div className="flex gap-0.5 sm:gap-1 mt-6 sm:mt-8">
                            {contributionData.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-0.5 sm:gap-1">
                                    {week.days.map((day, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className="w-[9px] h-[9px] sm:w-[12px] sm:h-[12px] rounded-[1px] sm:rounded-[2px] transition-all duration-200 hover:ring-1 hover:ring-gray-400 cursor-pointer"
                                            style={{
                                                backgroundColor: getColorForLevel(day.level),
                                            }}
                                            title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-end gap-1 sm:gap-2 mt-4 sm:mt-6 px-1">
                        <span className="text-[9px] sm:text-xs text-gray-500 font-sfmono">Less</span>
                        <div className="flex gap-0.5 sm:gap-1">
                            {[0, 1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className="w-[9px] h-[9px] sm:w-[12px] sm:h-[12px] rounded-[1px] sm:rounded-[2px]"
                                    style={{
                                        backgroundColor: getColorForLevel(level),
                                    }}
                                />
                            ))}
                        </div>
                        <span className="text-[9px] sm:text-xs text-gray-500 font-sfmono">More</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubContributions;

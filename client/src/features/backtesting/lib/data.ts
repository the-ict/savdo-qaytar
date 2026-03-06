export interface TimeFrameOption {
    timeFrameTitle: string;
    timeFrameValue: number;
    isStarred: boolean;
}

export const timeFrameOptions: TimeFrameOption[] = [
    {
        timeFrameTitle: "1m",
        timeFrameValue: 1,
        isStarred: false
    },
    {
        timeFrameTitle: "5m",
        timeFrameValue: 5,
        isStarred: false
    },
    {
        timeFrameTitle: "10m",
        timeFrameValue: 10,
        isStarred: false
    },
    {
        timeFrameTitle: "15m",
        timeFrameValue: 15,
        isStarred: false
    },
    {
        timeFrameTitle: "30m",
        timeFrameValue: 30,
        isStarred: false
    },
    {
        timeFrameTitle: "1h",
        timeFrameValue: 60,
        isStarred: false
    },

    {
        timeFrameTitle: "2h",
        timeFrameValue: 120,
        isStarred: false
    },

    {
        timeFrameTitle: "4h",
        timeFrameValue: 240,
        isStarred: false
    },

    {
        timeFrameTitle: "6h",
        timeFrameValue: 360,
        isStarred: false
    },
    {
        timeFrameTitle: "12h",
        timeFrameValue: 720,
        isStarred: false
    },

    {
        timeFrameTitle: "1d",
        timeFrameValue: 1440,
        isStarred: false
    },
]


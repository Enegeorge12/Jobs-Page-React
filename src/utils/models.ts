export interface Job {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: string[];
    },
    role: {
        content: string;
        items: string[];
    }
}

export interface Filters {
    textSearch: string;
    location: string[];
    fullTimeOnly: boolean;
}

export interface UserInfo {
    email: string;
    password: string;
}
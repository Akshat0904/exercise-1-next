export interface IFooterLink {
    map(arg0: (firstSectionLink: IFooterLink) => import("react").JSX.Element): import("react").ReactNode;
    src?: string;
    title: string;
    href: string
}

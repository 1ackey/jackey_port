/**
 * @interface Blog - 博客或笔记的数据结构
 */
export interface Blog {
    id: number;
    title: string;
    date: string;
    author: string;
}

/**
 * @interface ArchiveSectionProps - ArchiveSection 组件的 Props
 */
export interface ArchiveSectionProps {
    onSelectBlog: (blog: Blog) => void;
}

/**
 * @interface BlogReaderProps - BlogReader 组件的 Props
 */
export interface BlogReaderProps {
    blog: Blog;
    onBack: () => void;
}

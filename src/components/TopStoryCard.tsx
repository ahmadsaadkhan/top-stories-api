import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

interface Props {
    title: string;
    imageUrl: { url: string };
    url: string;
    styles: { card: CSSProperties }
}

const TopStoryCard = ({ title, imageUrl, url, styles }: Props) => {
    return (
        <Link
            href={url}
            target='_blank'
            className={styles.card}
        >
            <Image
                src={imageUrl.url}
                width={60}
                height={50}
                alt={title}
            />
            <div>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default TopStoryCard
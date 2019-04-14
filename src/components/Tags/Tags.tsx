import * as React from 'react';

import classnames from 'classnames';

import './Tags.css';

const TAGS = [
    {title: 'Каньоны', slug: 'kanony'},
    {title: 'Леса', slug: 'les'},
    {title: 'Пещеры', slug: 'peschery'},
    {title: 'Природа Европы', slug: 'priroda-evropy'},
    {title: 'Природа Азии', slug: 'priroda-azii'}
];

export interface TagsProps {
    current?: string;

    onClick?(slug: string): void;
}

export const Tags: React.FC<TagsProps> =
    function Tags({current, onClick}: TagsProps) {
        console.log('render tags');

        return (
            <div className="tags">
                <div className="tags__scroll">
                    <div className="tags__wrap">
                        {TAGS.map(({title, slug}, index) => (
                            <button
                                key={slug}
                                className={classnames('tag', `tag_color_${index % 5}`, {
                                    'tag_active': slug === current,
                                })}
                                onClick={() => onClick && onClick(slug)}
                            >
                                {title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

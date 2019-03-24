import * as React from 'react';

import './Demo.css';

export function Demo() {
    let card = (
        <div className="card">
            <div className="card__image image">
                <img
                    src="https://avatars.mds.yandex.net/get-pdb/998741/dce333dd-6f9c-4e84-ac40-d4c0654ef205/s375"
                    className="image__image"
                    alt=""
                />
            </div>

            <div className="card__profile">
                <div className="card__close">
                    <button className="close">
                        <span className="close__icon" />
                    </button>
                </div>

                <div className="person person_card">
                    <a
                        href="https://yandex.ru/collections/user/drexxar/"
                        target="_blank"
                        aria-label="text"
                        className="person__avatar"
                        title="Сергей Глушков"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="avatar"
                            src="https://avatars.mds.yandex.net/get-yapic/27232/591039997-1555108484/islands-retina-small"
                            alt="Сергей Глушков"
                        />
                    </a>

                    <div className="person__info">
                        <div className="board">
                            <a
                                href="https://yandex.ru/collections/user/drexxar/modnaia-boroda/"
                                className="board__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Модная борода
                            </a>
                        </div>

                        <div className="user">
                            <a
                                className="user__link"
                                href="/collections/user/drexxar/"
                                target="_blank"
                            >
                                Сергей Глушков
                            </a>
                        </div>

                        <div className="date">
                            <span className="date__desc">15 дней назад</span>
                        </div>
                    </div>
                </div>

                <div className="card__article article">
                    <div className="article__desc">
                        Как выбрать правильную форму бороды, как отрастить её и стоит ли девушке относиться
                        к ней негативно.
                    </div>

                    <a
                        className="article__link"
                        href="http://bowandtie.ru/vse-chto-nuzhno-znat-o-borode-ili-oda-bradosti/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        bowandtie.ru
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="feed">
                {card}
                {card}
            </div>

            <div className="spinner spinner_screen">
                <div className="spinner__inner" />
            </div>

            <div className="infinite spinner">
                <div className="spinner__inner" />
            </div>
        </React.Fragment>
    );
}

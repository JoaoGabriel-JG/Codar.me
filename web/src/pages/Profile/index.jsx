import { Fragment } from 'react'
import { Icon, Card } from '~/components'

export const Profile = () => (
    <>
        <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl flex justify-between">
                <img src="/imgs/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40"/>
            </div>
        </header>

        <main className="space-y-6">
            <section id="header" className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl space-y-2 p-4">
                    <a href="/dashboard"><Icon name="back" className="w-10"/></a>
                    <h3 className='text-2xl font-bold'>João Gabriel</h3>
                </div>
            </section>

            <section id="content" className="container max-w-3xl p-4 space-y-4">
            <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>


            <div className="p-4 flex space-x-4 items-center justify-center">
                <Icon name="arrowLeft" className="w-6 text-red-500"/>
                <span className="font-bold">24 de Novembro</span>
                <Icon name="arrowRight" className="w-6 text-red-500"/>
            </div>

            <div className="space-y-4">
                <Card 
                    timeA={{ slug: 'sui' }}
                    timeB={{ slug: 'cam' }}
                    match={{ time: '7:00' }}
                />

                <Card 
                    timeA={{ slug: 'uru' }}
                    timeB={{ slug: 'cor' }}
                    match={{ time: '10:00' }}
                />

                <Card 
                    timeA={{ slug: 'por' }}
                    timeB={{ slug: 'gan' }}
                    match={{ time: '12:00' }}
                />

                <Card 
                    timeA={{ slug: 'bra' }}
                    timeB={{ slug: 'ser' }}
                    match={{ time: '16:00' }}
                />
            </div>

            </section>
        </main>
    </>
)
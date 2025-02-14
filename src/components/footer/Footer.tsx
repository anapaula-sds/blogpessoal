import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-lime-400 text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-semibold'>
                            Blog Pessoal Ana Paula Santana | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/anapaula-sds/" target='blank'><LinkedinLogo size={36} weight='light' /></a>
                        <a href="https://github.com/anapaula-sds" target='blank'><GithubLogo size={36} weight='light' /></a>
                        <a href="https://www.linkedin.com/in/anapaula-sds/" target='blank'><InstagramLogo size={36} weight='light' /></a>
                        <a href="https://www.linkedin.com/in/anapaula-sds/" target='blank'><FacebookLogo size={36} weight='light' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
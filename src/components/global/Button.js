import Link from 'next/link';

const Button = ({href, target, title, alignmentLeft = false, colour}) => {

    const colours = {
        black: 'bg-ink-black text-white hover:bg-slate hover:text-ink-black border-1 border-ink-black border-solid',
        transparent: 'bg-transparent text-white border-1 border-white border-solid',
        red: 'bg-red text-white hover:bg-slate hover:text-ink-black border-1 border-white border-solid',
    }

    return (
        <div 
        className={`${
        alignmentLeft
            ? 'justify-start'
            : 'justify-center'
        } button-wrapper flex w-full lg:w-auto`}
        >
        
            <Link 
                href={href}
                target={target}
                className={ colours[colour] + `px-[10px] lg:px-[30px] py-[20px] rounded-sm font-bold text-[16px] tracking-wide w-full lg:w-fit hover:cursor-pointer text-center`}
            >
                {title}
            </Link>
        </div>
    );
};

export default Button;

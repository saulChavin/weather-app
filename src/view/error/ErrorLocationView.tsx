import clouds from '../../assets/rain.png'

export const ErrorLocationView = ({text}: {text?: string}) => {
    return (
        <div className='flex flex-col items-center self-center w-full'>
            <img
                src={clouds}
                className=''
                width={222}
                height={222}
            />

            <h1
                className='text-center p-8 text-xl text-neutral-400'
            >
                {text || "Esta un poco nublado... no fue posible obtener la informacion del clima"}
            </h1>
        </div>


    )
}

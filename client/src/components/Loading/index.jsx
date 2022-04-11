import style_css from './style.module.css'
export default function Loading(){
    return(
        <div className={style_css.position}>
            <div className={style_css.ubica}>
                <h1 className={style_css.h1}>
                    <span className={style_css.primero}>Henry</span> <span className={style_css.segundo}>Dogs</span>
                </h1>
                <div className={style_css.loadingBar}>

                </div>
            </div>

        </div>
    )
}
import style from '../styles/3.module.css'

export default function pages3() {
	return (
		<div className={style.box}>
		<div className={style.header}>
		<h1 className={style.haeder}>Sample Website</h1>
		</div>
		<div className={style.main}>
                <h2 className={style.main}>Heading</h2>
		<p className={style.main}>Content comes hero. Content comes here. Content comes here.
		Content comes here. Content comes here. Content comes here.
		</p>
		<h2 className={style.main}>Heading</h2>
		<p className={style.main}>Content comes here. Content comes here. Content comes here.
         	Content comes here. Content comes here. Content comes here.
		</p>
		</div>
		<div className={style.footer}>
		<p className={style.footer}>Copyright (c) 2013 xxxxxxxx. All right reserved.</p>
		</div>
		</div>
	)
}

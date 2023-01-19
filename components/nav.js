import Link from 'next/link'

export default function Nav() {
	return (
		<nav>
		<ul>
		<li>
		<Link legacyBehavior href='/1'>
		<a>・1</a>
		</Link>
		</li>
		<li>
                <Link legacyBehavior href='/2'>
                <a>・2</a>
                </Link>
                </li>
		<li>
                <Link legacyBehavior href='/3'>
                <a>・3</a>
                </Link>
                </li>
		<li>
                <Link legacyBehavior href='/4'>
                <a>・4</a>
                </Link>
                </li>
                <li>
                <Link legacyBehavior href='/5'>
                <a>・5</a>
                </Link>
                </li>

		</ul>
		</nav>
	)
}


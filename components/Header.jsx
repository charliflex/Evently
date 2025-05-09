import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ background: '#eee', padding: '1rem' }}>
      <Link href="/"><strong>Evently</strong></Link> | <Link href="/wishlist/user123">My Wishlist</Link>
    </header>
  );
}

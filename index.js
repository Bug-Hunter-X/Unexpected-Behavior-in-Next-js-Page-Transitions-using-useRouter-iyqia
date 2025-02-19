```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function About() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData({ message: 'Data fetched!' });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{data.message}</p>
          <button onClick={handleClick}>Go back to Home</button>
        </>      )}
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
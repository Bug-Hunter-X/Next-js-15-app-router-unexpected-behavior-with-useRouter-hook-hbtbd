```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useRouter } from 'next/navigation';

export default function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about', { scroll: false }); //Ensure client side redirect
  };

  return (
    <button onClick={handleClick}>Go to About</button>
  );
}

// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

export const dynamicParams = false;

export async function generateStaticParams() {
  const hooks = [
    'use-state', 
    'use-effect', 
    'use-context', 
    'use-reducer', 
    'use-ref', 
    'use-memo', 
    'use-callback'
  ];
  return hooks.map((slug) => ({ slug }));
}

export default async function HookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let HookComponent;
  
  // Statically known map for Next.js to bundle properly
  switch (slug) {
    case 'use-state':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-state/content'));
      break;
    case 'use-effect':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-effect/content'));
      break;
    case 'use-context':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-context/content'));
      break;
    case 'use-reducer':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-reducer/content'));
      break;
    case 'use-ref':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-ref/content'));
      break;
    case 'use-memo':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-memo/content'));
      break;
    case 'use-callback':
      HookComponent = dynamic(() => import('@/src/app/hooks/use-callback/content'));
      break;
    default:
      notFound();
  }

  return <HookComponent />;
}

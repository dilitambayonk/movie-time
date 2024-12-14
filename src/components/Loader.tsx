import { cn } from '@/lib/utils';

interface ILoader {
  className?: string;
}

const Loader = ({ className }: ILoader) => {
  return (
    <div className={cn(className, 'grid place-content-center py-40')}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-b-4 border-white/50 border-b-white" />
    </div>
  );
};

export default Loader;

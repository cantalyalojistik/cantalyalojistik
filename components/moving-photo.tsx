import { withBasePath } from '@/lib/site';
import { cn } from '@/lib/utils';

const movingPhotos = {
  packing: {
    file: 'ambalajli-ev-esyalari',
    alt: 'Balonlu naylonla ambalajlanmış koltuk, mobilya ve taşınma kolileri',
  },
  lift: {
    file: 'asansorlu-ev-tasima',
    alt: 'Apartman cephesindeki eşya taşıma asansörü ve nakliye kamyonu',
  },
} as const;

export type MovingPhotoKind = keyof typeof movingPhotos;

export function MovingPhoto({
  kind,
  className,
  priority = false,
  decorative = false,
  sizes = '100vw',
}: {
  kind: MovingPhotoKind;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
  sizes?: string;
}) {
  const photo = movingPhotos[kind];
  return (
    <img
      src={withBasePath(`/images/${photo.file}-large.webp`)}
      srcSet={`${withBasePath(`/images/${photo.file}-small.webp`)} 720w, ${withBasePath(`/images/${photo.file}-large.webp`)} 1440w`}
      sizes={sizes}
      width={1440}
      height={960}
      alt={decorative ? '' : photo.alt}
      aria-hidden={decorative || undefined}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={cn('h-full w-full object-cover', className)}
    />
  );
}

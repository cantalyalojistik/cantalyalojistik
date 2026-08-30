import { ServiceDetail } from '@/components/service-detail';
import { createServiceMetadata, servicePages } from '@/lib/service-pages';

export const dynamic = 'force-static';
export const metadata = createServiceMetadata('paletli-yuk-tasima');

export default function Page() {
  return <ServiceDetail service={servicePages['paletli-yuk-tasima']} />;
}

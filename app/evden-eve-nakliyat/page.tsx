import { ServiceDetail } from '@/components/service-detail';
import { createServiceMetadata, servicePages } from '@/lib/service-pages';

export const dynamic = 'force-static';
export const metadata = createServiceMetadata('evden-eve-nakliyat');

export default function Page() {
  return <ServiceDetail service={servicePages['evden-eve-nakliyat']} />;
}

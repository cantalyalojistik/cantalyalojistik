import { ServiceDetail } from '@/components/service-detail';
import { createServiceMetadata, servicePages } from '@/lib/service-pages';

export const dynamic = 'force-static';
export const metadata = createServiceMetadata('asansorlu-evden-eve-nakliyat');

export default function Page() {
  return <ServiceDetail service={servicePages['asansorlu-evden-eve-nakliyat']} />;
}

import { ServiceDetail } from '@/components/service-detail';
import { createServiceMetadata, servicePages } from '@/lib/service-pages';

export const metadata = createServiceMetadata('ambar-nakliye');

export default function AmbarNakliyePage() {
  return <ServiceDetail service={servicePages['ambar-nakliye']} />;
}

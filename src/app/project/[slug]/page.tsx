import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectText } from '@/constants';
import { getProjectPage } from '@/utils/detail';
import { buildDetailMetadata } from '@/utils/metadata';
import DetailPage from '@/components/DetailPage';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectText.list.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return buildDetailMetadata(getProjectPage(slug), `/project/${slug}`);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getProjectPage(slug);
  if (!data) notFound();

  return <DetailPage data={data} />;
}

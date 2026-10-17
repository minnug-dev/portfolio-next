import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectText } from '@/constants';
import { getProjectPage } from '@/utils/detail';
import DetailPage from '@/components/DetailPage';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectText.list.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getProjectPage(slug);
  if (!data) return {};

  const title = `${data.title} | 박민주 포트폴리오`;
  return {
    title,
    description: data.desc,
    openGraph: { title, description: data.desc },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getProjectPage(slug);
  if (!data) notFound();

  return <DetailPage data={data} />;
}

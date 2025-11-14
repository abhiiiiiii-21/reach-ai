import React from 'react'
import WebsiteUrl from './_components/WebsiteUrl'
import { analyzeWebsite } from '@/app/actions/analyze';

const page = async () => {
  // const object= await analyzeWebsite(url);
  return (
    <div>
      <WebsiteUrl/>
    </div>
  )
}

export default page
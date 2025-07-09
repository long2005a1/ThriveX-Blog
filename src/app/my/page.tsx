import bg from '@/assets/image/bg.png'

import Goals from './component/Goals'
import Character from './component/Character'
import Map from './component/Map'
import Technology from './component/Technology'
import Project from './component/Project'
import Calendar from "./component/Calendar"
import InfoTwo from './component/InfoTwo'
import { getPageConfigDataByNameAPI } from '@/api/config'
import { Config } from '@/types/app/config'

export default async () => {
  const { data: { value: data } } = await getPageConfigDataByNameAPI("my") || { data: {} as Config }

  return (
    <>
      <title>👋 关于我</title>
      <meta name="description" content="👋 关于我" />

      <div className="bg-white dark:bg-black-a pt-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="w-[90%] lg:w-[950px] mx-auto">
          {/* <Info data={data?.info} /> */}
          <InfoTwo data={data?.info_two} />
        </div>

        <div className='flex justify-center mt-24 px-10'>
          <Calendar />
        </div>

        <div className="flex flex-col md:flex-row w-[90%] sm:w-9/12 mt-52 mx-auto">
          <Character data={data?.character} />
          <Goals data={data?.goals} />
        </div>

        <div className="flex flex-col md:flex-row w-[90%] sm:w-9/12 mt-52 mx-auto">
          <Map />
          <Technology />
        </div>

        <div className="mt-52">
          <Project data={data?.project} />
        </div>

        {/* <div className="mt-52">
          <CurriculumVitae />
        </div> */}
      </div>
    </>
  )
}

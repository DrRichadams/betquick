"use client";

import { HiStatusOnline } from "react-icons/hi";
import { TiArrowRight } from "react-icons/ti";
import Link from "next/link";

type Props = {
    show_all: boolean
}

const LiveTitle = ({ show_all }: Props) => {
  return (
    <div className="live_section_titles">
        <div className="live_titles_left">
            <HiStatusOnline color="#B1BF24" size={25} />
            <h3>Live</h3>
        </div>
            {
                show_all ?
                    <Link href="/live" className='high_see_all'>
                        <p>see all</p>
                        <TiArrowRight size={23} />
                    </Link>
                : null
            }
    </div>
  )
}

export default LiveTitle
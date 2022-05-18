import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterTimeline() {
    return (
        <div className='h-full'>
            <div className='h-full scrollbar-hide bg-green-500'>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="manutd"
                    options={{ height: 800 }}
                />
            </div>

        </div>
    )
}

export default TwitterTimeline
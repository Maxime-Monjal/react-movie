import React from "react"

type ISocialNetwork = {socialNetworkName: string, socialNetworkID: string | undefined, imgSrc: string, alt: string}

export const SocialNetwork = ({socialNetworkName, socialNetworkID, imgSrc, alt}: ISocialNetwork ) => {
    return (
        <> 
        {socialNetworkID && <a target="_blank" rel="noreferrer" href={`https://${socialNetworkName}.com/${socialNetworkID}`}> <img src={imgSrc} alt={alt} /> </a>}
        </>
    )
}
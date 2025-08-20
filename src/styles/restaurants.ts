import styled, { css } from "styled-components";
import colors from "./colors";

type CoverProps = {
    image: string
}

export const RestaurantCover = styled.div<CoverProps>`
        width: 100%;
        height: 280px;
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
    .restaurant-infos {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        .tipo {
            font-weight: 100;
            font-size: 32px;
            color: ${colors.pureWhite};
            padding-top: 25px;
        }

        

        .restaurant-name {
            color: ${colors.pureWhite};
            position: absolute;
            bottom: 32px;
        }
    }
`

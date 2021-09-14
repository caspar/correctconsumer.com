import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

const query = graphql`
    query HeaderImage {
        backgroundImage: file(relativePath: { eq: "header.png" }) {
            childImageSharp {
                fluid(
                    maxWidth: 1240
                    quality: 80
                    traceSVG: { color: "#9596cf" }
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export const Query: FunctionComponent<QueryProps> = ({ children }) => {
    return <StaticQuery query={query} render={data => children(data)} />;
};

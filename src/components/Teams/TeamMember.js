import React from 'react';
import styles from './TeamMember.module.css'
import LinkButton from "../UI/LinkButton/LinkButton";
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import GridItem from '../UI/Grid/GridItem';

function TeamMember(props) {
    return (
        <GridItem className={styles['member']}>
            <div className={styles['member-image']}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className={styles['member-details']}>
                <h3>
                    {props.name}
                </h3>
                <h4>
                    {props.role}
                </h4>
            </div>
            <div className={styles['member-social-links-buttons']}>
                <LinkButton>
                    <span>{<AiFillFacebook/>}</span>
                </LinkButton>
                <LinkButton>
                    <span>{<AiFillLinkedin/>}</span>
                </LinkButton>
                <LinkButton>
                    <span>{<AiFillTwitterCircle/>}</span>
                </LinkButton>
            </div>
        </GridItem>
    );
}

export default TeamMember;
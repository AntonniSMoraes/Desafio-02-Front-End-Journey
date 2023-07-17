import styles from './FilterRanking.module.css'
import React, { useEffect, useState } from 'react';

export default function FilterRanking() {
    const [barFocus, setBarFocus] = useState(0);
    let todayStyle, thisWeekStyle, thisMonthStyle, allTimeStyle;
    const borderStyles = {
        noBorder: {
            borderBottom: 'none',
            color: '#858584'
        },
        selectedBorder: {
            borderBottom: '2px solid gray',
            color: 'white'
        }
    };

    function handleClick(event){
        const clicked = event.currentTarget.id;
        if(barFocus !== 0 && clicked === 'today'){
            setBarFocus(0);
        }else if(barFocus !== 1 && clicked === 'thisWeek'){
            setBarFocus(1);
        }else if(barFocus !== 2 && clicked === 'thisMounth'){
            setBarFocus(2);
        }else if(barFocus !== 3 && clicked === 'allTime'){
            setBarFocus(3);
        }
    }

    if(barFocus === 0){
        todayStyle = borderStyles.selectedBorder;
        thisWeekStyle = borderStyles.noBorder;
        thisMonthStyle = borderStyles.noBorder;
        allTimeStyle = borderStyles.noBorder; 
    }else if(barFocus === 1){
        todayStyle = borderStyles.noBorder;
        thisWeekStyle = borderStyles.selectedBorder;
        thisMonthStyle = borderStyles.noBorder;
        allTimeStyle = borderStyles.noBorder; 
    }else if(barFocus === 2){
        todayStyle = borderStyles.noBorder;
        thisWeekStyle = borderStyles.noBorder;
        thisMonthStyle = borderStyles.selectedBorder;
        allTimeStyle = borderStyles.noBorder;
    }else if(barFocus === 3){
        todayStyle = borderStyles.noBorder;
        thisWeekStyle = borderStyles.noBorder;
        thisMonthStyle = borderStyles.noBorder;
        allTimeStyle = borderStyles.selectedBorder;
    }
    
    const [todayTitle, setTodayTitle] = useState('Today');
    const [thisWeekTitle, setThisWeekTitle] = useState('This Week');
    const [thisMonthTitle, setThisMonthTitle] = useState('This Month');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth < 834) {
            setTodayTitle('1d');
            setThisWeekTitle('7d');
            setThisMonthTitle('30d');
        } else {
            setTodayTitle('Today');
            setThisWeekTitle('This Week');
            setThisMonthTitle('This Month');
        }
    }, [windowWidth]);


    return(
        <div className={styles.search_nft_selector}>
            <button onClick={handleClick} id='today' className={styles.titles} style={todayStyle}>
                {todayTitle}
            </button>
            <button onClick={handleClick} id='thisWeek' className={styles.titles} style={thisWeekStyle}>
                {thisWeekTitle}
            </button>
            <button onClick={handleClick} id='thisMonth' className={styles.titles} style={thisMonthStyle}>
                {thisMonthTitle}
            </button>
            <button onClick={handleClick} id='allTime' className={styles.titles} style={allTimeStyle}>
                All Time
            </button>
        </div>
    );
}
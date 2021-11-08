import React, {
  useCallback,
  useLayoutEffect,
  useState,
  createContext,
  useMemo,
  useContext,
  useEffect,
  useRef,
} from 'react';
import mojs from 'mo-js';
import styles from './index.css';
import userStyles from './usage.css';

const initialState = {
  count: 0,
  countTotal: 267,
  isClicked: false,
};

// high order component
const useClapAnimation = ({ clapEl, countEl, totalEl }) => {
  const [animationTL, setAnimationTL] = useState(() => new mojs.Timeline());

  useLayoutEffect(() => {
    if (!clapEl || !countEl || !totalEl) {
      return;
    }

    const tlDuration = 300;

    const countTotalAnimation = new mojs.Html({
      el: totalEl,
      opacity: { 0: 1 },
      delay: (3 * tlDuration) / 2,
      duration: tlDuration,
      y: { 0: -3 },
    });

    const scaleButton = new mojs.Html({
      el: clapEl,
      duration: tlDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.ease.out,
    });

    const triangleBurst = new mojs.Burst({
      parent: clapEl,
      radius: { 50: 95 },
      count: 5,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: { 6: 0 },
        stroke: 'rgba(211, 54, 0, 0.5)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration,
      },
    });

    const circleBurst = new mojs.Burst({
      parent: clapEl,
      radius: { 50: 75 },
      angle: 25,
      duration: tlDuration,
      children: {
        shape: 'circle',
        fill: 'rgba(149, 165, 166, 0.5)',
        delay: 30,
        speed: 0.2,
        radius: { 3: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    const countAnimation = new mojs.Html({
      el: countEl,
      opacity: { 0: 1 },
      y: { 0: -30 },
      duration: tlDuration,
    }).then({
      opacity: { 1: 0 },
      y: -80,
      delay: tlDuration / 2,
    });

    if (typeof clapEl === 'string') {
      const clap = document.getElementById('clap');
      clap.style.transform = 'scale(1,1)';
    } else {
      clapEl.style.transform = 'scale(1,1)';
    }

    const newAnimationTL = animationTL.add([
      scaleButton,
      countTotalAnimation,
      countAnimation,
      triangleBurst,
      circleBurst,
    ]);

    setAnimationTL(newAnimationTL);
  }, [clapEl, countEl, totalEl]);

  return animationTL;
};

const MediumClapContext = createContext();
const { Provider } = MediumClapContext;

const MediumClap = ({ onClap, children, style: userSyles = {}, className }) => {
  const MAXIMUM_USER_CLAP = 50;
  const [clapState, setClapState] = useState(initialState);
  const [{ clapRef, clapCountRef, clapTotalRef }, setRefs] = useState({});

  const animationTL = useClapAnimation({
    clapEl: clapRef,
    countEl: clapCountRef,
    totalEl: clapTotalRef,
  });

  const setRef = useCallback((node) => {
    if (node !== null) {
      setRefs((prevRefState) => ({
        ...prevRefState,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted.current) {
      onClap && onClap(clapState);
    }

    componentJustMounted.current = false;
  }, [clapState.count]);

  const handleClapClick = () => {
    animationTL.replay();

    setClapState((prevState) => ({
      isClicked: true,
      count: Math.min(prevState.count + 1, MAXIMUM_USER_CLAP),
      countTotal:
        clapState.count < MAXIMUM_USER_CLAP
          ? ++prevState.countTotal
          : prevState.countTotal,
    }));
  };

  const memoizedValue = useMemo(
    () => ({ ...clapState, setRef }),
    [clapState, setRef]
  );

  const classNames = [styles.clap, className].join(' ').trim();

  return (
    <Provider value={memoizedValue}>
      <button
        ref={setRef}
        data-refkey="clapRef"
        className={classNames}
        onClick={handleClapClick}
        style={userSyles}
      >
        {children}
      </button>
    </Provider>
  );
};

/*
  SubComponents
*/

const ClapIcon = ({ style: userSyles = {}, className }) => {
  const { isClicked } = useContext(MediumClapContext);

  const classNames = [styles.icon, isClicked ? styles.checked : '', className]
    .join(' ')
    .trim();

  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-549 338 100.1 125"
        className={classNames}
        style={userSyles}
      >
        <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z" />
        <path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9" />
      </svg>
    </span>
  );
};

const ClapCount = ({ style: userSyles = {}, className }) => {
  const { count, setRef } = useContext(MediumClapContext);

  const classNames = [styles.count, className].join(' ').trim();

  return (
    <span
      ref={setRef}
      data-refkey="clapCountRef"
      className={classNames}
      style={userSyles}
    >
      + {count}
    </span>
  );
};

const CountTotal = ({ style: userSyles = {}, className }) => {
  const { countTotal, setRef } = useContext(MediumClapContext);

  const classNames = [styles.total, className].join(' ').trim();

  return (
    <span
      ref={setRef}
      data-refkey="clapTotalRef"
      className={classNames}
      style={userSyles}
    >
      {countTotal}
    </span>
  );
};

MediumClap.Icon = ClapIcon;
MediumClap.Count = ClapCount;
MediumClap.Total = CountTotal;

const Usage = () => {
  const [count, setCount] = useState(0);

  const handleClap = (clapState) => {
    setCount(clapState.count);
  };

  return (
    <div style={{ width: '100%' }}>
      <MediumClap onClap={handleClap} className={userStyles.clap}>
        <MediumClap.Icon className={userStyles.icon} />
        <MediumClap.Count className={userStyles.count} />
        <MediumClap.Total className={userStyles.total} />
      </MediumClap>
      {!!count && <div className={styles.info}>You have clapped {count}</div>}
    </div>
  );
};

export default Usage;

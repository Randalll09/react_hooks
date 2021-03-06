const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener);
  };
  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  };
  return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default UsePreventLeave;

import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { IDispatch, IState } from '../../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<IDispatch>();
export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;

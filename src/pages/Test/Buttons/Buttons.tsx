import { MdAutoMode, MdPlayArrow } from 'react-icons/md';
import Button from 'components/base/Button';

import './Buttons.scss';

const Buttons = () => {
    return (
        <div className="test-buttons">
            <Button variant="default" label="Default button" Icon={MdAutoMode} />
            <Button
                variant="default"
                disabled
                label="Right icon button"
                iconPlacement="right"
                Icon={MdAutoMode}
            />
            <Button variant="alt" label="Alt button with some really huge name for this button" />
            <Button
                variant="outlined"
                label="Outlined button some really huge name for this button"
            />
            <Button variant="text" label="Text button" />
            <Button variant="round-filled" label="Round button" Icon={MdAutoMode} />
            <Button variant="round-outlined" Icon={MdPlayArrow} />
        </div>
    );
};

export default Buttons;

import { MdAutoMode, MdPlayArrow } from 'react-icons/md';
import Button from 'components/base/Button';

import './Buttons.scss';

const Buttons = () => {
    return (
        <div className="test-buttons-container">
            <h6>Buttons with labels</h6>
            <div className="test-buttons">
                <Button variant="default" label="Default button" Icon={MdAutoMode} />
                <Button
                    variant="default"
                    disabled
                    label="Right icon button"
                    iconPlacement="right"
                    Icon={MdAutoMode}
                />
                <Button
                    variant="alt"
                    label="Alt button with some really huge name for this button"
                />
                <Button
                    variant="outlined"
                    label="Outlined button some really huge name for this button"
                />
                <Button variant="text" label="Text button" />
            </div>
            <h6>Default button with sizes</h6>
            <div className="test-buttons">
                <Button variant="default" size="small" label="Small button" />
                <Button variant="default" disabled size="medium" label="Medium button" />
                <Button variant="default" size="large" label="Large button" />
            </div>
            <h6>Alt button with sizes</h6>
            <div className="test-buttons">
                <Button variant="alt" size="small" label="Small Alt button" />
                <Button variant="alt" disabled size="medium" label="Medium Alt button" />
                <Button variant="alt" size="large" label="Large Alt button" />
            </div>
            <h6>Outlined button with sizes</h6>
            <div className="test-buttons">
                <Button variant="outlined" size="small" label="Small Outlined button" />
                <Button variant="outlined" disabled size="medium" label="Medium Outlined button" />
                <Button variant="outlined" size="large" label="Large Outlined button" />
            </div>
            <h6>Text button with sizes</h6>
            <div className="test-buttons">
                <Button variant="text" size="small" label="Small Text button" />
                <Button variant="text" disabled size="medium" label="Medium Text button" />
                <Button variant="text" size="large" label="Large Text button" />
            </div>
            <h6>Round buttons - icon only</h6>
            <div className="test-buttons">
                <Button
                    variant="round-filled"
                    size="small"
                    label="Round button"
                    Icon={MdAutoMode}
                />
                <Button
                    variant="round-filled"
                    size="medium"
                    label="Round button"
                    Icon={MdAutoMode}
                />
                <Button
                    variant="round-filled"
                    size="large"
                    label="Round button"
                    Icon={MdAutoMode}
                />
                <Button variant="round-outlined" size="small" Icon={MdPlayArrow} />
                <Button variant="round-outlined" Icon={MdPlayArrow} />
                <Button variant="round-outlined" size="large" Icon={MdPlayArrow} />
            </div>
        </div>
    );
};

export default Buttons;

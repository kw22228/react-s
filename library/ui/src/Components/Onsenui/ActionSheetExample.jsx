import React, { useState } from 'react';
import { Button, ActionSheet, ActionSheetButton } from 'react-onsenui';

export default function ActionSheetExample() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    return (
        <div>
            <Button onClick={handleClick}>Action Sheet Open</Button>
            <ActionSheet isOpen={open} title="Action sheet">
                <ActionSheetButton>Label1</ActionSheetButton>
                <ActionSheetButton>Label2</ActionSheetButton>
                <ActionSheetButton>Label3</ActionSheetButton>
                <ActionSheetButton modifier="destructive">
                    Cancel
                </ActionSheetButton>
                <ActionSheetButton>Save</ActionSheetButton>
            </ActionSheet>
        </div>
    );
}

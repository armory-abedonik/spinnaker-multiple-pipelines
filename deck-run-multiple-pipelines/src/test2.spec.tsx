import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import CancelAllModal from './modals/CancelAllModal';

test('loads and displays greeting', async () => {
    // ARRANGE
    render(<CancelAllModal/>)

    // ASSERT
    expect(screen.getByText('Really stop execution of all apps?')).toBeVisible()
})

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { NeedsReviewInstancesSection } from 'common/components/cards/needs-review-instances-section';
import { UnifiedFeatureFlags } from 'electron/common/unified-feature-flags';
import { TestConfig } from 'electron/types/test-config';
import { VirtualKeyboardView } from 'electron/views/virtual-keyboard/virtual-keyboard-view';
import * as React from 'react';

export const tabStopsTestConfig: TestConfig = {
    key: 'tab-stops',
    contentPageInfo: {
        title: 'Tab stops',
        description: (
            <>
                <strong>How to test:</strong>
                <ol>
                    <li>Navigate to the screen you want to test in your app.</li>
                    <li>
                        Turn on the Show tab stops toggle. An empty circle will highlight the
                        element with focus.
                    </li>
                    <li>
                        If you are connected to an emulator, select your emulator app to bring it
                        into focus and use your keyboard.
                    </li>
                    <li>
                        Or If you are connected to a physical mobile device use the keyboard
                        key-buttons below.
                    </li>
                    <li>
                        Move input focus through all the interactive elements in the page:
                        <ul>
                            <li>Use Tab and Shift+Tab to navigate between standalone controls.</li>
                            <li>
                                Use the arrow keys to navigate between the focusable elements within
                                a composite control.
                            </li>
                        </ul>
                    </li>
                    <li>
                        As you navigate to each element, look for these accessibility problems:
                        <ul>
                            <li>
                                An interactive element can't be reached using the Tab and arrow
                                keys.
                            </li>
                            <li>
                                An interactive element "traps" input focus and prevents navigating
                                away.
                            </li>
                            <li>
                                An interactive element doesn't give a visible indication when it has
                                input focus.
                            </li>
                            <li>
                                The tab order is inconsistent with the logical order that's
                                communicated visually.
                            </li>
                            <li>Input focus moves unexpectedly without the user initiating it.</li>
                        </ul>
                    </li>
                </ol>
            </>
        ),
        instancesSectionComponent: NeedsReviewInstancesSection,
        resultsFilter: _ => false,
        allowsExportReport: false,
        visualHelperSection: VirtualKeyboardView,
    },
    featureFlag: UnifiedFeatureFlags.tabStops,
};

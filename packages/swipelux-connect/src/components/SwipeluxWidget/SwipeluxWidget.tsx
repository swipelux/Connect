import React, { useRef, useEffect } from 'react';
import { useSwipeluxWidget } from "../RainbowKitProvider/SwipeluxWidgetContext";
import { Box } from "../Box/Box";

export function SwipeluxWidget({ address }: { address?: string }) {
    const widgetRef = useRef(null);
    const widgetInit = useRef(false);
    const { ready, widgetSettings } = useSwipeluxWidget();

    useEffect(() => {
        if (ready && widgetRef.current && window && !widgetInit.current) {
            // @ts-ignore
            const widget = new window.SwipeluxWidget(
                widgetRef.current,
                { apiKey: 'a',
                    // @ts-ignore
                    ...widgetSettings,
                    defaultValues:
                        // @ts-ignore
                        {
                            address: {
                                value: address,
                                editable: false,
                            }
                        }
                });
            widget.init();
            widgetInit.current = true;
        }
    }, [address, widgetSettings, ready]);

    return (
        <Box ref={widgetRef} />
    )
}

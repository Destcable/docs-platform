import { Button, Popover, PopoverSurface, PopoverTrigger } from "@fluentui/react-components"
import { Layer20Regular } from "@fluentui/react-icons"

export const HeaderActionsSpace = ({ children }) => (
    <>
        <Popover positioning="below-start">
            <PopoverTrigger disableButtonEnhancement>
                <Button appearance="transparent" icon={<Layer20Regular />}>
                    Основное пространство
                </Button>
            </PopoverTrigger>
            <PopoverSurface style={{ minWidth: 100, padding: 0 }}>
                {children}
            </PopoverSurface>
        </Popover>

    </>

)
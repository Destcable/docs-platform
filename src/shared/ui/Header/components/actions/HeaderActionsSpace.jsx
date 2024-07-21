import { Button, Popover, PopoverSurface, PopoverTrigger } from "@fluentui/react-components"
import { AddRegular, Layer20Regular } from "@fluentui/react-icons"

export const HeaderActionsSpace = () => (
    <Popover positioning="below-start">
        <PopoverTrigger disableButtonEnhancement>
            <Button appearance="transparent" icon={<Layer20Regular />}>
                Основное пространство
            </Button>
        </PopoverTrigger>
        <PopoverSurface style={{ minWidth: 100, padding: 0 }}>
            <Button appearance="subtle" icon={<AddRegular />}>Добавить пространство</Button>
            <hr />
            <Button appearance="subtle" icon={<Layer20Regular />}>
                Основное пространство
            </Button>
        </PopoverSurface>
    </Popover>
)
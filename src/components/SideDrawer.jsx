import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export default function SideDrawer({ closeDrawer, open }) {
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      placement="right"
      size={360}
      className="p-4"
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Your Cart list
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div className="flex  flex-wrap gap-x-5 mb-6 text-sm font-medium">
        <div className="flex gap-2">
          <Typography>1)</Typography>
          <Typography>Sample Cloth</Typography>
        </div>
        <Typography>x</Typography>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="border-2 w-10 text-center"
        />
        <div className="flex gap-2">
          <Typography>=</Typography>
          <Typography>100 BR</Typography>
        </div>
      </div>
      <div className="flex  flex-wrap gap-x-5 mb-6 text-sm font-medium">
        <div className="flex gap-2">
          <Typography>2)</Typography>
          <Typography>Sample Cloth</Typography>
        </div>
        <Typography>x</Typography>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="border-2 w-10 text-center"
        />
        <div className="flex gap-2">
          <Typography>=</Typography>
          <Typography>100 BR</Typography>
        </div>
      </div>
      <div className="flex  flex-wrap gap-x-5 mb-6 text-sm font-medium">
        <div className="flex gap-2">
          <Typography>3)</Typography>
          <Typography>Sample Cloth</Typography>
        </div>
        <Typography>x</Typography>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="border-2 w-10 text-center"
        />
        <div className="flex gap-2">
          <Typography>=</Typography>
          <Typography>100 BR</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 justify-end">
          <Typography variant="h4">Total: </Typography>
          <Typography variant="h4">300 BR</Typography>
        </div>
        <div className="flex gap-2 justify-center">
          <Button size="sm" variant="outlined">
            Update
          </Button>
          <Button size="sm">Checkout</Button>
        </div>
      </div>
    </Drawer>
  );
}

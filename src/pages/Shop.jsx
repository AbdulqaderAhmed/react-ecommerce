import {
  Button,
  Card,
  Chip,
  Input,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";
import { useState } from "react";
import { ItemCard } from "../components/ItemCard";
import { Pagination } from "../components/Pagination";

export default function Shop() {
  const [search, setSearch] = useState("");
  const onChange = ({ target }) => setSearch(target.value);
  return (
    <div className="container mx-auto py-10 grid grid-flow-row lg:grid-cols-3">
      <div className="flex flex-col w-6/6 p-5">
        {/* search */}
        <div className="relative flex w-full max-w-[24rem] gap-y-8 mb-8">
          <Input
            type="text"
            label="Search Product"
            value={search}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={search ? "gray" : "blue-gray"}
            disabled={!search}
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>

        {/* category */}
        <div>
          <Card className="w-96">
            <List>
              <ListItem>
                Clothes
                <ListItemSuffix>
                  <Chip
                    value="14"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Shoe
                <ListItemSuffix>
                  <Chip
                    value="2"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Electronic
                <ListItemSuffix>
                  <Chip
                    value="30"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Furniture
                <ListItemSuffix>
                  <Chip
                    value="70"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Books
                <ListItemSuffix>
                  <Chip
                    value="400"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </List>
          </Card>
        </div>
      </div>

      {/* products */}
      <div className="flex flex-col gap-y-5 md:col-span-1 lg:col-span-2">
        <div className="grid grid-flow-row lg:grid-cols-2 gap-y-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div className="mx-auto">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

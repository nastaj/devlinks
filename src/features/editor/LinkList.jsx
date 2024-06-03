import EmptyLinkList from "./EmptyLinkList";
import LinkForm from "./LinkForm";
import Spinner from "../../ui/Spinner";
import useLinks from "./useLinks";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useUpdatePosition from "./useUpdatePosition";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

function LinkList({ setFormData, setIsValid }) {
  const { links, isLoading } = useLinks();

  // DND Hooks
  const { updatePos } = useUpdatePosition();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  if (isLoading) return <Spinner />;
  if (!links.length) return <EmptyLinkList />;

  // DND Functions
  function getLinksPos(id) {
    const linkPos = links.find((link) => link.id === id);
    return linkPos;
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const originalPos = getLinksPos(active.id);
    const newPos = getLinksPos(over.id);

    updatePos({ originalPos, newPos });
  }

  return (
    <ul className="flex flex-col gap-6 overflow-y-auto">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        <SortableContext items={links} strategy={verticalListSortingStrategy}>
          {links.map((form, index) => (
            <LinkForm
              key={form.id}
              form={form}
              index={index}
              setFormData={setFormData}
              setIsValid={setIsValid}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
}

export default LinkList;

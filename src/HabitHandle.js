export default function HabitHanle({ habit, removeHabit }) {
  return (
    <li>
      <div class="delete" onClick={() => removeHabit(habit)}>
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <div class="text">{habit}</div>
    </li>
  );
}

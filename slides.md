## Универсальный конвертер уравнений прямой

Выберите тип преобразования:

<select id="conversionType" onchange="changeForm()">
    <option value="g2c">Общее → Каноническое</option>
    <option value="g2p">Общее → Параметрическое</option>
    <option value="c2g">Каноническое → Общее</option>
    <option value="c2p">Каноническое → Параметрическое</option>
    <option value="p2c">Параметрическое → Каноническое</option>
    <option value="p2g">Параметрическое → Общее</option>
</select>

<div id="inputArea"></div>

<br>

<button onclick="convertEquation()">
Преобразовать
</button>

### Результат

<div id="result"></div>